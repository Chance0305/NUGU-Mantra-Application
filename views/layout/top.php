
<?php use Gondr\App\Library; ?><!-- layout_container start -->
<div class="layout_container">
    <section id="top">
        <img src="imgs/logo_white.png" alt="logo img" id="logo_white">
        <i class="fas fa-cog" id="option_btn"></i>
    </section>

    <section id="main">

    <script>    
        window.user_name = `<?= htmlentities(Library::getUser()->user_name) ?>`;
    </script>