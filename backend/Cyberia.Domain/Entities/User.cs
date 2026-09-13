using Cyberia.Domain.Enums;

namespace Cyberia.Domain.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string HashedPassword { get; set; }
        public Role Role { get; set; }
    }
}
