var telas = ["menu", "jogo"];
var larguraJogo = 1280;
var alturaJogo = 720;

function menu() {
	
	var botao;
	
	this.preload = function () {
		
		game.stage.backgroundColor = "#00bff";
		game.load.image("botao-inicio", "botao.png");
		game.load.image("Tela-inicial", "Tela_inicial_Colmeia.png");
		
	};
	
	this.create = function () {
		
		// Adiciona a imagem na coordenada (20, 100) da tela,
		// lembrando que (0, 0) está no canto superior esquerdo!
		//
		// Como iremos trabalhar com a imagem depois, precisamos
		// armazenar em uma variável.
		botao = game.add.image(250, 450, "botao-inicio");
		
		fundo = game.add.image(0, 0, "Tela-inicial");
		
		// Habilita que a imagem seja clicada.
		botao.inputEnabled = true;
		// Altera o cursor do mouse quando ele estiver sobre
		// a imagem.
		botao.input.useHandCursor = true;
		// Diz qual função deve ser executada quando a imagem
		// for clicada.
		botao.events.onInputDown.add(botaoFoiClicado);
		
		fadeIn();
		
	};
	
	this.update = function () {
		
	};
	
	function botaoFoiClicado() {
		
		// Em vez de simplesmente iniciar a tela, como
		// estamos utilizando fade, devemos esperar o
		// fade acabar para começar a outra tela!
		fadeOut(fadeOutAcabou);
		
	}
	
	function fadeOutAcabou() {
		
		// Apenas inicia a primeira tela do jogo.
		game.state.start("jogo");
		
	}
	
}
