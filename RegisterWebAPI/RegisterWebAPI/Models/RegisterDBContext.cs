using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RegisterWebAPI.Models
{
    public class RegisterDBContext:DbContext
    {
        public RegisterDBContext(DbContextOptions<RegisterDBContext> options):base(options)
        {

        }
        public DbSet<Users> Users { get; set; }
    }
}
