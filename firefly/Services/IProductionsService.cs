using System.Collections.Generic;
using firefly.Models;

namespace firefly.Services
{
    public interface IProductionsService
    {
        void Delete(int id);
        Production Find(int id);
        Production FindProductionDetails(int id);
        ApplicationUser GetUser(string userId);
        IList<Production> ListProductions();
        IList<Production> ListUsersProductions(ApplicationUser user);
        void SaveProduction(Production productionToSave, ApplicationUser user);
        void SaveProfile(string userId, ApplicationUser profile);
    }
}