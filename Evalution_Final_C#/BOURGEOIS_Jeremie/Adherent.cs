using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace $safeprojectname$
{
    [XmlInclude(typeof(MembreBureau))]
    [XmlInclude(typeof(MembreSimple))]
    public class Adherent : Personne
    {
        private int numero;
        private DateTime dateEntree;
        public Adherent(string nom, string prenom, DateTime dateNaissance,int numero, DateTime dateEntree) : base (nom,prenom,dateNaissance)
        {
            this.numero = numero;
            this.dateEntree = dateEntree;
        }


        public int Numero
        {
            get { return numero; }
            set { numero = value; }
        }

        public DateTime DateEntree
        {
            get { return dateEntree; }
            set { dateEntree = value; }
        }
    }
}
