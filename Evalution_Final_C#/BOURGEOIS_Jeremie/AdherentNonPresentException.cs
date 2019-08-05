using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace $safeprojectname$
{
    public class AdherentNonPresentException : Exception
    {
        private int numero;

        public AdherentNonPresentException(int num)
        {
            this.numero = num;
        }

        public override string Message
        {
            get
            {
                return "L'adherant " + this.numero + " n'est pas présent !";
            }
        }
    }
}
