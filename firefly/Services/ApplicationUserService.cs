using firefly.Models;
using FireFly;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace firefly.Services
{
    public class ApplicationUserService : IApplicationUserService
    {
        private IGenericRepository _repo;
        public ApplicationUserService(IGenericRepository repo)
        {
            _repo = repo;
        }
        public IList<ApplicationUser> ListUsers()
        {
            return (from u in _repo.Query<ApplicationUser>() select u).ToList();
        }
        public ApplicationUser Get(string id)
        {
            return _repo.Find<ApplicationUser>(id);
        }
        public void SaveUser(ApplicationUser user)
        {
            var isExist = new ApplicationUser().Id != null;
            if (!isExist)
            {
                _repo.Add<ApplicationUser>(user);
                _repo.SaveChanges();
            }
            else
            {
                var original = _repo.Find<ApplicationUser>(user.Id);
                original.FullName = user.FullName;
                original.ShortBio = user.ShortBio;
                _repo.SaveChanges();
            }
        }
        public void Delete(string id)
        {
            _repo.Delete<ApplicationUser>(id);
            _repo.SaveChanges();
        }
    }
}