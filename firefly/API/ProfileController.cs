using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using firefly.Models;
using firefly.Services;

namespace firefly.API
{
    public class ProfileController : ApiController
    {
        private IProductionsService _productionsService;

        public ProfileController(IProductionsService productionsService)
        {
            _productionsService = productionsService;
        }

        public ApplicationUser Get()
        {
            var userId = this.User.Identity.GetUserId();
            return _productionsService.GetUser(userId);
        }

        public IHttpActionResult Get(int id)
        {
            var profile = _productionsService.Find(id);
            if (profile == null)
            {
                return NotFound();
            }
            return Ok(profile);
        }

        [Authorize]
        public IHttpActionResult Post(ApplicationUser profile)
        {
            var userId = User.Identity.GetUserId();
            var user = _productionsService.GetUser(userId);

            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            _productionsService.SaveProfile(userId, profile);
            return Created("", profile);
        }

        [Authorize]
        public IHttpActionResult Delete(int id)
        {
            _productionsService.Delete(id);
            return Ok();
        }
    }
}