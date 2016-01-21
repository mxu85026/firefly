using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace firefly.Models 
{
    public class Donations 
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
        public int ProductionID { get; set; }
        public decimal DonatedNum { get; set; }
        //public int TierSelection { get; set; }
    }
}