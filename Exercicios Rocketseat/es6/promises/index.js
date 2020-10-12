$(() => {
    $('#enviar').on('click', () => {
        const nome = $('input').val();

        $.ajax({
            type: 'GET',
            url: `https://api.github.com/users/${nome}/repos`,
            beforeSend:
                () => $('#lista').append(`<li>Carregando...</li>`),
            success:
                (res) => {
                    $('#lista').html('')
                    for (let i=0; i < res.length; i++) {
                        $('#lista').append(`<li>${res[i].name}</li>`)
                    }
                }
        })
    })
})