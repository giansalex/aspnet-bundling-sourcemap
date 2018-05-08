using System.Web.Mvc;

namespace AspNetBundle.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}