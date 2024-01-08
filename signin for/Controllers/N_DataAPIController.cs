using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using signin_forAPI.Data;
using signin_forAPI.Model;
using signin_forAPI.Model.Dto;

namespace signin_forAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class N_DataAPIController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public N_DataAPIController(ApplicationDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        public ActionResult<IEnumerable<N_DataDTO>> GetVillas()
        {
            return Ok(_db.n_data);
        }

[HttpGet("login")]
public ActionResult<N_DataDTO> GetUserByCredentials(string userName, string Password)
{
    var user = _db.n_data.FirstOrDefault(u => u.User_Name == userName && u.Password == Password);
    return Ok(user);
}



        [HttpPost]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(400)]
        public ActionResult<N_DataDTO> CreateVilla([FromBody] N_DataDTO NDTO)
        {
            if (NDTO == null)
            {
                return BadRequest(NDTO);
            }
            if (NDTO.Id > 0)
            {
                return BadRequest();
            }
            //to create DToafter thing
            N_Data model = new()
            {
                Id = NDTO.Id,
                User_Name=NDTO.User_Name,
                Password = NDTO.Password,
            };
            _db.n_data.Add(model);
            _db.SaveChanges();

            return Ok(NDTO);

        }
    }
}
