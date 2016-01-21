using firefly.Models;
using firefly.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.AspNet.Identity;

namespace firefly.API
{
    public class UserInfoController: ApiController
    {
        private IProductionsService _productionsService;

        public UserInfoController(IProductionsService productionsService)
        {
            _productionsService = productionsService;
        }

        [Authorize]
        //list of productions by user
        public IEnumerable<Production> Get()
        {
            var userId = this.User.Identity.GetUserId();
            var user = _productionsService.GetUser(userId);

            var prods = _productionsService.ListUsersProductions(user);
            return prods;
        }

    }
}