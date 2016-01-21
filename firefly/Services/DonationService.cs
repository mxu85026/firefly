using firefly.Migrations;
using firefly.Models;
using FireFly;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace firefly.Services {
    public class DonationService : IDonationService {
        private IGenericRepository _repo;
        public DonationService(IGenericRepository repo) {
            _repo = repo;
        }
        public IList<Donations> ListDonations() {
            var allDonations = from p in _repo.Query<Donations>() select p;
            return allDonations.ToList();
        }
        
        public IList<Donations> ListUsersDonations(ApplicationUser user) {
            var userProd = from p in _repo.Query<Donations>() where p.User.Id == user.Id select p;
            return userProd.ToList();
        }

        public Donations Find(int id) {
            return _repo.Find<Donations>(id);
        }

        public void SaveDonation(Donations donationToSave, ApplicationUser user, int id) {
            if (donationToSave.Id == 0) {
                donationToSave.User = user;
                var production = _repo.Find<Production>(id);
                production.Donation.Add(donationToSave);
                //_repo.Add<Donations>(donationToSave);
                production.AddDonations();
                _repo.SaveChanges();
            }
            else {
                var original = this.Find(donationToSave.Id);
                original.User = user;
                original.DonatedNum = donationToSave.DonatedNum;
                original.ProductionID = donationToSave.ProductionID;
                //original.TierSelection = donationToSave.TierSelection;
                _repo.SaveChanges();
            }
        }

        public void SaveProfile(string userId, ApplicationUser profile) {
            var original = this.GetUser(userId);
            original.FullName = profile.FullName;
            original.ShortBio = profile.ShortBio;
            _repo.SaveChanges();
        }

        public ApplicationUser GetUser(string userId) {
            return _repo.Find<ApplicationUser>(userId);
        }

        public void Delete(int id) {
            _repo.Delete<Donations>(id);
            _repo.SaveChanges();
        }

        public Donations FindDonationDetails(int id) {
            var donation = _repo.Query<Donations>().Include(p => p.User).Where(p => p.Id == id).FirstOrDefault();
            return donation;
        }

    }
}