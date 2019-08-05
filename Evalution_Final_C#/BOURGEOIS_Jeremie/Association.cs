using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace $safeprojectname$
{
    public class Association
    {
        private List<Adherent> adherents;

        public Association()
        {
            this.adherents = new List<Adherent>();

        }

        public void Ajoute(Adherent a)
        {
            adherents.Add(a);
        }

        public Adherent GetAdherent(int i) 
        {
            foreach(Adherent adherent in adherents)
            {
                if(adherent.Numero==i){
                    return adherent;
                }
            }
            throw new AdherentNonPresentException(i);
        }


        public void Supprime(int i)
        {
            foreach (Adherent adherent in adherents)
            {
                if (adherent.Numero == i)
                {
                    adherents.Remove(adherent);
                }
            }
            throw new AdherentNonPresentException(i);
        }

        public void Enregistre()
        {
            XmlSerializer xs = new XmlSerializer(typeof(List<Adherent>));
            StreamWriter wr = new StreamWriter(@".\ListAdherent.xml");
            xs.Serialize(wr, this.adherents);

        }

        public void chargeListe(string path)
        {

            XmlSerializer xs = new XmlSerializer(typeof(List<Adherent>));
            StreamReader sr = new StreamReader(@path);
            List<Adherent> adherents = xs.Deserialize(sr) as List<Adherent>;
        }

        public int getNombreAdherentsBornAfter(DateTime date)
        {
            List<Adherent> liste = this.adherents.Where(a => a.DateNaissance.CompareTo(date).Equals(1)).ToList();
            return liste.Count;
        }

        public List<Adherent> getAdherentsTriesParDateDeNaissance(bool isByOrdreCroissant)
        {
            List<Adherent> liste = new List<Adherent();
            if (isByOrdreCroissant)
            {
                liste = this.adherents.OrderBy(a => a.DateNaissance).ToList();

            }
            else
            {
                liste = this.adherents.OrderByDescending(a => a.DateNaissance).ToList();
            }
            return liste;
        }

        //Non achevé
        //public int getNombreMembreSimple(Categorie categorie)
        //{
        //    List<MembreSimple> liste = (List<MembreSimple> )this.adherents.Where(a => a is MembreSimple && a.Categorie =).ToList();
        //    return liste.Count; 
        //}



    }
}
