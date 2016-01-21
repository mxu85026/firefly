using firefly.Models;
using firefly.Services;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace firefly.API
{
    public class CommentsController : ApiController
    {
        private ICommentsService _commentsService;

        public CommentsController(ICommentsService commentService)
        {
            _commentsService = commentService;
            
        }

        public CommentVM Get()
        {
            var comments = _commentsService.ListComments((ClaimsPrincipal)this.User);
            return comments;
        }

        //public IEnumerable<Comments> Get()
        //{


        //    var comments = _commentsService.ListComments();
        //    return comments;
        //}

        [Authorize]
        public IHttpActionResult Post(CommentVM vm)
        {
            var userId = this.User.Identity.GetUserId();
            var user = _commentsService.GetUser(userId);
            

            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }

            var comment = vm.CommToSave;
            var id = vm.ProdId;

            _commentsService.SaveComments(comment, user, id);
            return Created("", comment);
            }

        [Authorize]
        public IHttpActionResult Delete(int id)
        {
            _commentsService.Delete(id);
            return Ok();
        }

        public IHttpActionResult Get(int id)
        {
            var comment = _commentsService.FindComment(id);
            if(comment == null)
            {
                return NotFound();
            }
            return Ok(comment);
        }
    }

}
