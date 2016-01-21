using System.Collections.Generic;
using firefly.Models;

namespace firefly.Services {
    public interface IDonationService {
        void Delete(int id);
        Donations Find(int id);
        Donations FindDonationDetails(int id);
        ApplicationUser GetUser(string userId);
        IList<Donations> ListDonations();
        IList<Donations> ListUsersDonations(ApplicationUser user);
        void SaveDonation(Donations donationToSave, ApplicationUser user, int id);
        void SaveProfile(string userId, ApplicationUser profile);
    }
}