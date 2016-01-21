using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace firefly.Models
{
    public class Comments
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Comment { get; set; }
      
        public int ProductionId { get; set; }
      
        public Production Production { get; set; }
       
        public string UserId { get; set; }
     
        public ApplicationUser User { get; set; }

        public bool CanModify { get; set; }

        public bool CanDelete { get; set; }

    }
}