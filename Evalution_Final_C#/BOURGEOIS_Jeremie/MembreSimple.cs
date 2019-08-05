using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace $safeprojectname$
{
    public class MembreSimple : Adherent,ICotisable
    {
        private Categorie categorie;
        public MembreSimple(string nom, string prenom, DateTime dateNaissance, int numero, DateTime dateEntree, Categorie categorie) : base(nom,prenom,dateNaissance,numero,dateEntree)
        {
            this.categorie = categorie;
        }

        public Categorie Categorie
        {
            get { return categorie; }
            set { categorie = value; }
        }

        public int getCotisation()
        {
            int supplement=0;

            if (this.Categorie.Code.Equals("C1")){
                supplement = 20;
            }
            if (this.Categorie.Code.Equals("C2")){
                supplement = 10;
            }

            return 100 + supplement;
        }
    }
}
