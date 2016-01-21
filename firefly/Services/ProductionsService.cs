using firefly.Models;
using FireFly;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Web;

namespace firefly.Services
{
    public class ProductionsService : IProductionsService
    {
        private IGenericRepository _repo;
        public ProductionsService(IGenericRepository repo) {
            _repo = repo;
        }

        public IList<Production> ListProductions() {
            var allProductions = _repo.Query<Production>().Include(p => p.Donation);
            return allProductions.ToList();
        }

        public IList<Production> ListUsersProductions(ApplicationUser user) {
            var userProd = from p in _repo.Query<Production>() where p.User.Id == user.Id select p;
            return userProd.ToList();
        }

        public Production Find(int id) {
            return _repo.Find<Production>(id);
        }

        public void SaveProduction(Production productionToSave, ApplicationUser user) {
            if (productionToSave.Id == 0)
            {
                productionToSave.User = user;
                productionToSave.Status = "Pending";
                _repo.Add<Production>(productionToSave);
                _repo.SaveChanges();
            }
            else {
                var original = this.Find(productionToSave.Id);
                original.Title = productionToSave.Title;
                original.Genre = productionToSave.Genre;
                original.FeatImg = productionToSave.FeatImg;
                original.Description = productionToSave.Description;
                original.StartDate = productionToSave.StartDate;
                original.EndDate = productionToSave.EndDate;
                original.ReqAmount = productionToSave.ReqAmount;
                original.Status = productionToSave.Status;
                original.User = user;
                _repo.SaveChanges();
            }
        }

        public void SaveProfile(string userId, ApplicationUser profile)
        {
            var original = this.GetUser(userId);
            original.FullName = profile.FullName;
            original.ShortBio = profile.ShortBio;
            _repo.SaveChanges();
        }

        public ApplicationUser GetUser(string userId) {
            return _repo.Find<ApplicationUser>(userId);
        }

        public void Delete(int id) {
            _repo.Delete<Production>(id);
            _repo.SaveChanges();
        }

        public Production FindProductionDetails(int id) {
            var production = _repo.Query<Production>().Where(p => p.Id == id).Include(p => p.User).Include(c=>c.Comments.Select(u=>u.User)).Include(d=>d.Donation).FirstOrDefault();
            return production;
        }


    }
}