using Microsoft.EntityFrameworkCore;
using signin_forAPI.Model;

namespace signin_forAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {

        }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<N_Data> n_data { get; set; }
    }
}
