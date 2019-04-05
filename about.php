<?php 
include("header.php");
include("leftblock.php");
?>
<div class="content">
	<button class="see_about">Одноголовая!</button>
	<button class="see_about">Кустовая!</button>
	<button class="see_about">Сантини!</button>
	<div id="about">
        <?php
        echo (int)$_GET[first]+(int)$_GET[second];
        ?>
	</div>
</div>
<?php
include("footer.php");
?>
