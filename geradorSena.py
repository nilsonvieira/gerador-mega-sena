import random
# Lista de Numeros que mais sairam na Megasena (https://noticias.r7.com/brasilia/saiba-qual-o-numero-mais-sorteado-nos-concursos-da-mega-sena-30122021)
ListaGeral = ([53,10,5,42,4,33,37,27,23,30])

# Lista de Numeros que mais saíram na mega da Virada (https://noticias.r7.com/brasilia/saiba-qual-o-numero-mais-sorteado-nos-concursos-da-mega-sena-30122021)
ListaVirada = ([10,3,5,20,36,2,11,17,18,22,33,34,35,37,38,40,41,42,51,53,56,58,22,1,4,6,12,14,16,24,25,27,29,30,31,32,43,45,46,47,49,50,52,55,57])

print(" ------------------ LISTA GERAL ------------------ ")
for i in range(3):
    ListaGeralAtualizada = random.sample(ListaGeral, 6)
    print(ListaGeralAtualizada)

print(" ------------------ LISTA VIRADA ------------------ ")
for i in range(7):
    ListaViradaAtualizada = random.sample(ListaVirada, 6)
    print(ListaViradaAtualizada)

  