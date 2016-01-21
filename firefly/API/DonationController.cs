using firefly.Models;
using firefly.Services;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace firefly.API {
    public class DonationController : ApiController {

        private IDonationService _donationService;

        public DonationController(IDonationService donationService) {
            _donationService = donationService;
        }

        public IEnumerable<Donations> Get() {
            var donations = _donationService.ListDonations();
            return donations;
        }

        [Authorize]
        public IHttpActionResult Post(DonationVM vm) 
        {

            var userId = this.User.Identity.GetUserId();
            var user = _donationService.GetUser(userId);

            if (!ModelState.IsValid) {
                return BadRequest(this.ModelState);
            }

            var donation = vm.DonationToSave;
            var id = vm.ProdId;

            _donationService.SaveDonation(donation, user, id);
            return Created("", donation);
        }

        [Authorize]
        public IHttpActionResult Delete(int id) {
            _donationService.Delete(id);
            return Ok();
        }

        public IHttpActionResult Get(int id) {
            var donations = _donationService.FindDonationDetails(id);
            if (donations == null) {
                return NotFound();
            }
            return Ok(donations);
        }

    }
}