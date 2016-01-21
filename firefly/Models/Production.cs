using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace firefly.Models
{
    public class Production
    {
        public Production()
        {
            this.Comments = new List<Comments>();
            this.UserInfo = new List<ApplicationUser>();
            this.Donation = new List<Donations>();
            this.AddDonations();
        }
        public int Id { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
        public ICollection<ApplicationUser> UserInfo { get; set; }
        public ICollection<Comments> Comments { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public string FeatImg { get; set; }
        public string Description { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}",
               ApplyFormatInEditMode = true)]
        public DateTime StartDate { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}",
               ApplyFormatInEditMode = true)]
        public DateTime EndDate { get; set; }
        public decimal ReqAmount { get; set; }
        public string Status { get; set; }
        public decimal DonationTotal { get; set; }
        public ICollection<Donations> Donation { get; set; }
        public Dictionary<int, string> Tier { get; set; }

        public void AddDonations(){
            foreach (var don in Donation) {
                this.DonationTotal += don.DonatedNum;
            }
        }
    }
}