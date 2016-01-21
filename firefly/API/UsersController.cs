using firefly.Models;
using firefly.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace firefly.API
{
    public class UsersController : ApiController
    {
        private IApplicationUserService _service;

        public UsersController(IApplicationUserService service)
        {
            this._service = service;
        }
        public IHttpActionResult Get()
        {
            var users = _service.ListUsers();
            return Ok(users);
        }
        public IHttpActionResult Post(ApplicationUser user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            _service.SaveUser(user);
            return Created("", user);
        }
        public IHttpActionResult Delete(string id)
        {
            _service.Delete(id);
            return Ok();
        }
        public IHttpActionResult Get(string id)
        {
            var user = _service.Get(id);
            if(user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}
