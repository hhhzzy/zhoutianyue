<template>
	<div class="show-box">
		<div class="shadow">
			<div class="loader">
					<div class="mask"></div>
			</div>​
		</div>
	</div>
</template>

<script>
</script>

<style>
.show-box{
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: rgba(0,0,0,0.5);
	z-index: 1000;
}
.shadow {
	position:absolute;
	top:50%;
	left:50%;
	border-radius:50%;
	margin-top:-50px;
	margin-left:-50px;
	box-shadow: 0 0 10px #666;
	height: 100px;
	width: 100px;
}

.loader {
    background: -webkit-linear-gradient(left, skyblue 50%, #fafafa 50%); /* Foreground color, Background colour */
    border-radius: 100%;
    height: 100px; /* Height and width */
    width: 100px; /* Height and width */
    animation: time 8s steps(500, start) infinite;
}
.mask {
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
    animation: mask 8s steps(250, start) infinite;
    transform-origin: 100% 50%;
}
@-webkit-keyframes time {
    100% { 
        transform: rotate(360deg);
    }
}
@-webkit-keyframes mask {
    0% {
        background: #fafafa; /* Background colour */
        transform: rotate(0deg);
    }
    50% {
        background: #fafafa; /* Background colour */
        transform: rotate(-180deg);
    }
    50.01% {
        background: skyBlue; /* Foreground colour */
        transform: rotate(0deg);
    }
    100% {
        background: skyBlue; /* Foreground colour */
        transform: rotate(-180deg);
    }
}

</style>