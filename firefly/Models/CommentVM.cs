using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace firefly.Models
{
    public class CommentVM
    {
        public int ProdId { get; set; }
        public Comments CommToSave { get; set; }
        public bool CanModify { get; set; }
        public bool CanDelete { get; set; }
        public List<CommentVM> List { get; set; }
    }       
}