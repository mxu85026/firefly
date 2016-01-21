using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace firefly.Models
{
    public class DonationVM
    {
        public int ProdId { get; set; }
        public Donations DonationToSave { get; set; }
    }       
}