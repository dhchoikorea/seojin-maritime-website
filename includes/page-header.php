<?php
if (!isset($page_title)) {
    $page_title = "SEOJIN MARITIME";
}

if (!isset($page_subtitle)) {
    $page_subtitle = "";
}

if (!isset($page_background)) {
    $page_background = "/assets/images/banner/page-header.jpg";
}
?>

<section class="page-header"
style="background-image:url('<?= htmlspecialchars($page_background) ?>');">

    <div class="page-header-overlay">

        <div class="container">

            <h1><?= htmlspecialchars($page_title) ?></h1>

            <?php if ($page_subtitle != "") : ?>

                <p><?= htmlspecialchars($page_subtitle) ?></p>

            <?php endif; ?>

        </div>

    </div>

</section>
