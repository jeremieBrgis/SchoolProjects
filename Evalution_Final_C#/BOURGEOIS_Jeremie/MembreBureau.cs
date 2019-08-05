using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace $safeprojectname$
{
    class MembreBureau : Adherent,ICotisable
    {
        private Role role;
        public MembreBureau(string nom, string prenom, DateTime dateNaissance, int numero, DateTime dateEntree, Role role) : base(nom,prenom,dateNaissance,numero,dateEntree)
        {
            this.role = role;
        }

        public Role Role
        {
            get { return role; }
            set { role = value; }
        }

        public int getCotisation()
        {
            return 60;
        }
    }
}
