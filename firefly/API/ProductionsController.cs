using firefly.Models;
using firefly.Services;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace firefly.API {
    public class ProductionsController : ApiController {

        private IProductionsService _productionsService;

        public ProductionsController(IProductionsService productionsService) {
            _productionsService = productionsService;
        }

        public IEnumerable<Production> Get() {
            var productions = _productionsService.ListProductions();
            return productions;
        }

        [Authorize]
        public IHttpActionResult Post(Production production) {
            var userId = this.User.Identity.GetUserId();
            var user = _productionsService.GetUser(userId);

            if (!ModelState.IsValid) {
                return BadRequest(this.ModelState);
            }
            _productionsService.SaveProduction(production, user);
            return Created("", production);
        }

        [Authorize]
        public IHttpActionResult Delete(int id) {
            _productionsService.Delete(id);
            return Ok();
        }

        public IHttpActionResult Get(int id) {
            var production = _productionsService.FindProductionDetails(id);
            if (production == null) {
                return NotFound();
            }
            return Ok(production);
        }


    }
}
