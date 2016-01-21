using System.Collections.Generic;
using firefly.Models;

namespace firefly.Services
{
    public interface IApplicationUserService
    {
        void Delete(string id);
        ApplicationUser Get(string id);
        IList<ApplicationUser> ListUsers();
        void SaveUser(ApplicationUser user);
    }
}