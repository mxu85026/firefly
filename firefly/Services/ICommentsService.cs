using System.Collections.Generic;
using firefly.Models;
using System.Security.Claims;

namespace firefly.Services
{
    public interface ICommentsService
    {
        void Delete(int id);
        Comments Find(int id);
        ApplicationUser GetUser(string userId);
        CommentVM ListComments(ClaimsPrincipal user);
        IList<Comments> ListProdComments(Production prod);
        void SaveComments(Comments commToSave, ApplicationUser user, int id);
        Comments FindComment(int id);
    }
}