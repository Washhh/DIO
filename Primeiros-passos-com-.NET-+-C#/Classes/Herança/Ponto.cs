namespace Classes.Heranca
{
    public class Ponto
    {
        public int x,y;
        private int distancia;

        public Ponto(int x, int y)
        {
            this.x = x;
            this.y = y;
        }

        protected void CalcularDistancia()
        {
            CalcularDistancia2();
        }

        private void CalcularDistancia2()
        {
            // faz algo
        }

        public virtual void CalcularDistancia3()
        {
            // faz algo
        }
    }
}