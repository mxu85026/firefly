using firefly.Models;
using FireFly;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;

namespace firefly.Services
{
    public class CommentsService : ICommentsService
    {
        private IGenericRepository _repo;
        public CommentsService(IGenericRepository repo)
        {
            _repo = repo;
        }

        public CommentVM ListComments(ClaimsPrincipal user) {
            var allComments = _repo.Query<Comments>()
                .Include(u => u.User).Include(p => p.Production).ToList();
            var userId = user.Identity.GetUserId();
            var isAdmin = user.HasClaim("Admin", "true");

            var commentVM = new CommentVM() {
                
                    List = allComments.Select(C => new CommentVM()
                    {
                        CommToSave = C,
                        CanModify = C.UserId == userId,
                        CanDelete = C.UserId == userId || isAdmin
                    }).ToList()
                };
            return commentVM;
            }
        
        //public IList<Comments> ListComments()
        //{
        //    var allComments = _repo.Query<Comments>().Include(u => u.User).Include(p => p.Production);
        //    return allComments.ToList();
        //}

        public IList<Comments> ListProdComments(Production prod)
        {
            var prodComm = from c in _repo.Query<Comments>() where c.Production.Id == prod.Id select c;
            return prodComm.ToList();
        }
        public Comments Find(int id)
        {
            return _repo.Find<Comments>(id);
        }

        public void SaveComments(Comments commToSave, ApplicationUser user, int id)
        {
            if (commToSave.Id == 0)
            {
                commToSave.User = user;
                var production = _repo.Find<Production>(id);
                production.Comments.Add(commToSave);
                
                _repo.SaveChanges();
            }
            else
            {
                var original = this.Find(commToSave.Id);
                original.Title = commToSave.Title;
                original.Comment = commToSave.Comment;
                original.User = user;
                
                _repo.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            _repo.Delete<Comments>(id);
            _repo.SaveChanges();
        }

        public ApplicationUser GetUser(string userId)
        {
            return _repo.Find<ApplicationUser>(userId);
        }

        public Comments FindComment(int id)
        {
            var comment = _repo.Query<Comments>().Include(u => u.User).Where(c => c.Id == id).FirstOrDefault();
            return comment;
        }

    }
}