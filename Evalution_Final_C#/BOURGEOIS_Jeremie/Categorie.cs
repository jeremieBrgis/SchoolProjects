using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace $safeprojectname$
{
    public class Categorie
    {
        private string code;
        private string libelle;

        public Categorie(string code, string libelle)
        {
            this.code = code;
            this.libelle = libelle;
        }

        public string Code
        {
            get { return code; }
            set { code = value; }
        }

        public string Libelle
        {
            get { return libelle; }
            set { libelle = value; }
        }
    }
}
