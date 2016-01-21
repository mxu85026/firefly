namespace firefly.Migrations {
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Claims;
    internal sealed class Configuration : DbMigrationsConfiguration<firefly.Models.ApplicationDbContext> {
        public Configuration() {
            AutomaticMigrationsEnabled = false;
            ContextKey = "firefly.Models.ApplicationDbContext";
        }

        protected override void Seed(firefly.Models.ApplicationDbContext context) {

            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);

            // Add admin
            var user = userManager.FindByName("admin@test.com");
            if (user == null) {
                user = new ApplicationUser {
                    UserName = "admin@test.com",
                    Email = "admin@test.com",
                    FullName = "Test Admin",
                    ShortBio = "I made this website, I'm the best"
                };
                userManager.Create(user, "Secret123!");
                // add claims
                userManager.AddClaim(user.Id, new Claim("Admin", "true"));
            }

            // Add regular user
            var user2 = userManager.FindByName("user@test.com");
            if (user2 == null) {
                user2 = new ApplicationUser {
                    UserName = "user@test.com",
                    Email = "user@test.com",
                    FullName = "Test User",
                    ShortBio = "I am a slave to this site..."
                };
                userManager.Create(user2, "Secret123!");
            };

          

            var donations = new Donations[] {
                new Donations {
                    UserId = user.Id,
                    ProductionID = 3,
                    DonatedNum = 190000.00m,
                    //TierSelection = 3
                },
                new Donations {
                    UserId = user2.Id,
                    ProductionID = 2,
                    DonatedNum = 15000.00m,
                   // TierSelection = 2
                },
                new Donations {
                    UserId = user2.Id,
                    ProductionID = 1,
                    DonatedNum = 5000.00m,
                    //TierSelection = 1
                }
            };
            context.Donation.AddOrUpdate(p => p.DonatedNum, donations);

            //Dictionary<int, string> fireFlyTiers = new Dictionary<int, string>();
            //fireFlyTiers.Add(1, "flamethrower");
            //fireFlyTiers.Add(2, "light saber");
            //fireFlyTiers.Add(3, "spaceship");
            //Dictionary<int, string> batmanTiers = new Dictionary<int, string>();
            //batmanTiers.Add(1, "cape");
            //batmanTiers.Add(2, "batmobile");
            //batmanTiers.Add(3, "mansion");

            var comments = new Comments[]
            {
                new Comments
                {
                    UserId = user.Id,
                    ProductionId = 2,
                    Title = "Title 1",
                    Comment = "useless comments....",
                    User = user
                },

                new Comments
                {
                    UserId = user.Id,
                    ProductionId = 3,
                    Title = "Title 2",
                    Comment = "More useless comments....", 
                    User = user
                }
            };
            context.Comment.AddOrUpdate(c => c.Title, comments);

            var productions = new Production[] {
                new Production {
                    Id = 1,
                    Title = "The Best Movie Ever",
                    Genre = "Movie",
                    FeatImg = "http://static.comicvine.com/uploads/original/5/59458/1298411-2006_superman_poster_003.jpg",
                    Description = "This is one of the best movies that has ever been made. Actually it is the best movie, but we need your help.",
                    StartDate = DateTime.Parse("2016/1/1"),
                    EndDate = DateTime.Parse("2016/2/1"),
                    ReqAmount = 50000.00m,
                    Status = "Complete"
                },
                new Production {
                    Id = 2,
                    Title = "FireFly 5 Episodes",
                    Genre = "TV Show",
                    FeatImg = "http://ia.media-imdb.com/images/M/MV5BMTM0OTIzNjM4OV5BMl5BanBnXkFtZTcwNDk4MDU5MQ@@._V1._CR57,54,340,418_SY317_CR22,0,214,317_AL_.jpg",
                    Description = "Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.",
                    StartDate = DateTime.Parse("2016/2/1"),
                    EndDate = DateTime.Parse("2016/3/30"),
                    ReqAmount = 1000000.00m,
                    Status = "Approved",
                    //Tier = fireFlyTiers
                },
                new Production {
                    Id = 3,
                    Title = "Batman (1966) Remake",
                    Genre = "TV Show",
                    FeatImg = "http://ia.media-imdb.com/images/M/MV5BMTkzNDY5NTg5MF5BMl5BanBnXkFtZTgwNzI4NzM1MjE@._V1_SY317_CR16,0,214,317_AL_.jpg",
                    Description = "The Caped Crusader battles evildoers in Gotham City in a bombastic 1960s parody of the comic book hero's exploits.",
                    StartDate = DateTime.Parse("2015/12/11"),
                    EndDate = DateTime.Parse("2016/1/10"),
                    ReqAmount = 200000.00m,
                    Status = "Approved",
                    //Tier = batmanTiers,
                    User = user2,
                    UserId = user2.Id
                },
                new Production {
                    Id = 4,
                    Title = "The Revenant",
                    Genre = "Movie",
                    FeatImg = "http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2015/11/02/revenant-poster_612x380.jpg",
                    Description = "A frontiersman on a fur trading expedition in the 1820's fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
                    StartDate = DateTime.Parse("2015/12/11"),
                    EndDate = DateTime.Parse("2016/1/10"),
                    ReqAmount = 200000.00m,
                    Status = "Approved",
                    //Tier = batmanTiers,
                    User = user2,
                    UserId = user2.Id
                },
                new Production {
                    Id = 5,
                    Title = "Star Wars: The Force Awakens",
                    Genre = "Movie",
                    FeatImg = "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/star-wars-force-awakens-official-poster.jpg",
                    Description = "Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.",
                    StartDate = DateTime.Parse("2015/12/11"),
                    EndDate = DateTime.Parse("2016/1/10"),
                    ReqAmount = 200000.00m,
                    Status = "Approved",
                    //Tier = batmanTiers,
                    User = user2,
                    UserId = user2.Id
                },
                new Production {
                    Id = 6,
                    Title = "The Hunger Games: Mockingjay - Part 2",
                    Genre = "Movie",
                    FeatImg = "http://www.newnewthings.com/wp-content/uploads/2015/10/Hunger-Games-Mockingjay-Part-Two-01.jpg",
                    Description = "As the war of Panem escalates to the destruction of other districts, Katniss Everdeen, the reluctant leader of the rebellion, must bring together an army against President Snow, while all she holds dear hangs in the balance.",
                    StartDate = DateTime.Parse("2015/12/11"),
                    EndDate = DateTime.Parse("2016/1/10"),
                    ReqAmount = 200000.00m,
                    Status = "Approved",
                    //Tier = batmanTiers,
                    User = user2,
                    UserId = user2.Id
                },
                new Production {
                    Id = 7,
                    Title = "Creed",
                    Genre = "Movie",
                    FeatImg = "http://cdn1-www.comingsoon.net/assets/uploads/2015/09/creedheader.jpg",
                    Description = "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
                    StartDate = DateTime.Parse("2015/12/11"),
                    EndDate = DateTime.Parse("2016/1/10"),
                    ReqAmount = 200000.00m,
                    Status = "Approved",
                    //Tier = batmanTiers,
                    User = user2,
                    UserId = user2.Id
                },
                new Production {
                    Id = 8,
                    Title = "The Martian",
                    Genre = "Movie",
                    FeatImg = "http://cdn.traileraddict.com/content/20th-century-fox/martian2015.jpg",
                    Description = "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
                    StartDate = DateTime.Parse("2015/12/11"),
                    EndDate = DateTime.Parse("2016/1/10"),
                    ReqAmount = 200000.00m,
                    Status = "Approved",
                    //Tier = batmanTiers,
                    User = user2,
                    UserId = user2.Id
                },
                new Production {
                    Id = 9,
                    Title = "Joy",
                    Genre = "Movie",
                    FeatImg = "http://nuggettheatre.com/wp-content/uploads/2015/11/Jennifer-Lawrence-Joy-Movie-Poster.jpg",
                    Description = "Joy is the story of the title character, who rose to become founder and matriarch of a powerful family business dynasty.",
                    StartDate = DateTime.Parse("2015/12/11"),
                    EndDate = DateTime.Parse("2016/1/10"),
                    ReqAmount = 200000.00m,
                    Status = "Approved",
                    //Tier = batmanTiers,
                    User = user2,
                    UserId = user2.Id
                },
                new Production {
                    Id = 10,
                    Title = "Denied Horrible Batman Movie",
                    Genre = "Movie",
                    FeatImg = "http://cdn.bleedingcool.net/wp-content/uploads/2014/01/batman-1966.jpg",
                    Description = "The Caped Crusader battles evildoers in Gotham City in a bombastic 1960s parody of the comic book hero's exploits.",
                    StartDate = DateTime.Parse("2015/12/11"),
                    EndDate = DateTime.Parse("2016/1/10"),
                    ReqAmount = 200000.00m,
                    Status = "Denied",
                }
            };
            context.Productions.AddOrUpdate(p => p.Title, productions);

        }
    }
}
