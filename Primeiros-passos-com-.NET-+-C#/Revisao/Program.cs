using System;

namespace Revisao
{
    class Program
    {
        static void Main(string[] args)
        {
            Aluno[] alunos = new Aluno[5];
            int indiceAluno = 0;
            string opcaoUsuario = ObterOpcaoUsuario();
            
            while(opcaoUsuario.ToUpper() != "X")
            {
                switch(opcaoUsuario)
                {
                    case "1":
                        Console.WriteLine("Informe o nome do aluno:");
                        Aluno aluno = new Aluno();
                        aluno.Nome = Console.ReadLine();

                        Console.WriteLine("Informe a nota do aluno:");
                        if(decimal.TryParse(Console.ReadLine(),out decimal nota))
                        {
                            aluno.Nota = nota;
                        }
                        else
                        {
                            throw new ArgumentException("Valor da nota deve ser decimal");
                        }

                        alunos[indiceAluno] = aluno;
                        indiceAluno++;
                        break;

                    case "2":
                    //TODO: listar alunos
                        foreach(var elem in alunos)
                        {
                            if(!string.IsNullOrEmpty(elem.Nome))
                            {
                                 Console.WriteLine($"ALUNO: {elem.Nome} - NOTA: {elem.Nota}");
                            }
                               
                        }
                        break;
                    case "3":
                    //TODO: calcular media geral
                        decimal notaTotal = 0;
                        int numAlunos = 0;
                        foreach(var valores in alunos)
                        {
                            if(!string.IsNullOrEmpty(valores.Nome))
                            {
                                 notaTotal += valores.Nota;
                                 numAlunos++;
                            }
                        }
                        var mediaGeral = notaTotal/numAlunos;
                        Conceito conceitoGeral;
                        if(mediaGeral <2)
                        {
                            conceitoGeral = Conceito.E;
                        }
                        else if(mediaGeral <4)
                        {
                            conceitoGeral = Conceito.D;
                        }
                        else if(mediaGeral <6)
                        {
                            conceitoGeral = Conceito.C;
                        }
                        else if(mediaGeral <8)
                        {
                            conceitoGeral = Conceito.B;
                        }
                        else{
                            conceitoGeral = Conceito.A;
                        }

                        Console.WriteLine($"A média geral é: {mediaGeral} - CONCEITO: {conceitoGeral}");
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();

                }
                
                opcaoUsuario = ObterOpcaoUsuario();
                
            }
        }
        private static string ObterOpcaoUsuario()
        {
            Console.WriteLine(); 
            Console.WriteLine("Informe a opção desejada:");
            Console.WriteLine("1- Inserir novo aluno");
            Console.WriteLine("2- Listar alunos");
            Console.WriteLine("3- Calcular média geral");
            Console.WriteLine("X- Sair");
            Console.WriteLine(); 

            string opcaoUsuario = Console.ReadLine();
            return opcaoUsuario;          
        }
    }
}
