function jogo() {
	
	var botao1, botao2;
	var fundo;
	var botaoPodeClicar, telaAtual, telaDepoisDoFadeOut;
	
	var telas = [
	
		"vb.png", //0
		"F.V.png", //1
		"F.B.png", //2
		"F.A.png", //3
		"V.Per.png", //4
		"Pt.R.png", //5
		"At.Ce.png", //6
		"F.Acont.png", //7
		"B.Real.png", //8
		"Final.tra.png", //9
		"espinho_2.png", // 10
		"xxx.png",// 11 falatando 
		"Contra.Rainha.png", //12
		"Relat.Rainha.png", //13
		"Final.humano.png", //14 
		"Decisao.Imp.png", //15
		"volt.polen.png", //16
		"colmeia.quebrada.png", //17
		"complo.ini.png", //18
		"servente.final.png", //19
		"Negacao.final.png", //20
		"ff.png", //21
		"complo.separacao.png", //22
		"complo.rebeliao.png", //23
		"separacao.org.png", //24
		"discusao.png", //25 
		"complo.rebe.total.png", //26
		"org.chefe.png", //27
		"col.feliz.png", //28
		"violencia.final.png", //29
		"mani.viole.png", //30
		"vira.rainha.final.png", //31
		"armas.png", //32
		"paz.final.png", //33
		"revolucao.final.png", //34
		"estrategia.defensiva", //35
		"armas.ataque.png", //36
		"muralha.final.png", //37
		"rainha.vs.final.png", //38
		"ataque.hum.final.png", //39
	];
	
	var telasAnteriores = [
	1, //esquerdo da 0
	3, // esquerdo da 1
	5, // esquerdo da 2
	7, // esquerda da 3
	9, // esquerda da 4
	19, // esquerda da 5
	13, // esquerda da 6
	15, //esquerda da 7
	16, // esquerda da 8
	0, // esquerdo da 9
	9, // esquerda da 10
	0, // esquerda da 11
	18, //esquerda da 12
	19, // esquerda da 13 
	0, // esquerda da 14
	20, // esquerda da 15
	15, // esquerda da 16
	21, // esquerda da 17
	22, // esquerda da 18
	0, // esquerda da 19
	0, // esquerda da 20 
	0, // esquerda da 21 
	24, // esquerda da 22
	26, // esquerda da 23
	27, // esquerda da 24
	26, // esquerda da 25 
	29, // esquerda da 26 
	31, // esquerda da 27
	32, // esquerda da 28
	0, // esquerda da 29
	29, // esquerda da 30
	0, // esquerda da 31
	35, // esquerda da 32
	0, //esquerda da 33
	0, //esquerda da 34	
	37, // esquerda da 35
	38, // esquerda da 36
	0, // esquerda da 37
    0, // esquerda da 38
    0, // esquerda da 39
	
	];
	
	var telasPosteriores = [
	2, //direito da 0
	4, // direito da 1 
	6, //direito da 2 
	8, //direito da 3 
	10, // direito da 4
	12, // direito da 5
	14, //direito da 6 
	15, // direito da 7
	17, // direito da 8
	0, //direita da 9 
	15, // direita da 10
	0, // direita da 11 
	18, //direita da 12
	12, // direita da 13
	0, // direita da 14 
	12 , // direita da 15
	15, // direita da 16
	21, // direita da 17	
	23, // direita da 18
	0, // direita da 19
	0, // direita da 20 
	0, // direita da 21 
	25, // direita da 22 
	25, // direita da 23
	28, // direita da 24 
	24, // direita da 25 
	30, // direita da 26
	28, // direita da 27
	33, // direita da 28
	0, // direita da 29
	34, // direita da 30
	0, // direita da 31 
	36, // direita da 32 
	0, // direita da 33 
	0, //direita da 34	
	32, // direita da 35
	39, // direita da 36
	0, //direita da 37
	0, // direita da 38
	0, // direita da 39
	
	];
	
	this.preload = function () {
		
		game.load.image("botao","botao.png");
		
		game.load.image("fundo", telas[0]);
		
	};
	
	this.create = function () {
		
		botaoPodeClicar = true;
		
		telaAtual = 0;
		fundo = game.add.image(0, 0, "fundo");
		
		//botoes de decisao
		botao1 = game.add.image(190, 550, "botao");
		botao1.inputEnabled = true;
		botao1.input.useHandCursor = true;
		botao1.events.onInputDown.add(acaoBotao1);
		
		botao2 = game.add.image(850, 550, "botao");
		botao2.inputEnabled = true;
		botao2.input.useHandCursor = true;
		botao2.events.onInputDown.add(acaoBotao2);
		
		fadeIn();
		
	};
	
	this.update = function () {
		
	};
	
	function fundoCarregado() {
		
		fundo = game.add.image(0, 0, "fundo");
		fundo.alpha = 0;
		fundo.sendToBack();
		
		game.add.tween(fundo).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeInOk, this);
		
	}
	
	function fadeOutOk() {
		
		fundo.kill();
		fundo.destroy(true, true);
		telaAtual = telaDepoisDoFadeOut;
		game.load.onLoadComplete.addOnce(fundoCarregado, this);
		game.load.image("fundo", telas[telaAtual]);
		game.load.start();
		
	}
	
	function fadeInOk() {
		
		botaoPodeClicar = true;
		
	}
	
	function acaoBotao1() {
		
		if (botaoPodeClicar == true) {
			telaDepoisDoFadeOut = telasAnteriores[telaAtual];
			if (telaAtual != telaDepoisDoFadeOut) {
				botaoPodeClicar = false;
				game.add.tween(fundo).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeOutOk, this);
			}
		}
		
	}
	
	function acaoBotao2() {
		
		if (botaoPodeClicar == true) {
			telaDepoisDoFadeOut = telasPosteriores[telaAtual];
			if (telaAtual != telaDepoisDoFadeOut) {
				botaoPodeClicar = false;
				game.add.tween(fundo).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true).onComplete.add(fadeOutOk, this);
			}
		}
		
	}
	
}
