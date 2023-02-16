//controla a rodada, iniciando a primeira rodada
var rodada = 1;
//
var matriz_jogo = Array(3);


$(document).ready(function() {
    $('#btn_play').click(function() {
        //verifica se o campo de inserir apelido está vazio
        if($('#inserir_j1').val() == ''){
            alert("Apelido do Jogador 1 Não Inserido!");
            return false;
        }

        if($('#inserir_j2').val() == ''){
            alert("Apelido do Jogador 2 Não Inserido!");
            return false;
        }

        //exibe os apelidos
        $('#apelido_j1').html($('#inserir_j1').val());
        $('#apelido_j2').html($('#inserir_j2').val());

        //controla exibição
        $('#pagina_inicial').hide();
        $('#palco_jogo').show();
    });

    $('.jogada').click(function(){
        var id_campo_clicado = this.id;
        jogada(id_campo_clicado);
    });

    function jogada (id){
        var icone = '';
        var ponto = 0;

        if((rodada % 2) == 1) {
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
        } else {
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
        }
        rodada++;

        $('#'+id).css('background-image', icone);
    }

});