<template>
	<div id="page">

	<div class="left_container">
		<aside class="column">
			<div class="aside_header">
				<div class="aside-title">
					<span class="aside-title_text">PROJECTUS</span>
					<div class="button-search"><i class="fa fa-search"></i></div>
				</div>
			</div>
			<div class="user">
				<div class="user_block">
					<div class="user_block_wrap">
						<span class="user_block_name">Jean Gonzales</span>
						<span class="user_block_status">Product Owner</span>
					</div>
					<div class="user-menu_button"><a  href="#" class="dotts">&#9679;&#9679;&#9679;</a></div>
				</div>
				<div class="user-stats">
					<div class="completed-tasks" id="complited">
						<span class="value" id="complited-tasks-value">372</span>
						<span class="state" >Complited Tasks</span>
					</div>
					<div class="open-tasks" id="open-tasks">
						<span class="value" id="open-tasks-value">11</span>
						<span class="state" >Open Tasks</span>
					</div>
				</div>
			</div>
			<div class="aside-menu">
				<div class="aside-menu_wrap">
					<ul class="aside-menu_list">
						<li class="aside-menu_items aside-menu_title">MENU</li>
						<li class="aside-menu_items"><a href="#">Home</a></li>
						<li class="aside-menu_items"><a href="#">My tasks</a></li>
						<li class="aside-menu_items aside-menu_items_3" id="notifications">
							<a href="#" class="link-notification">Notifications</a>
							<span class="notifications_number" id="notifications_value">3</span>
						</li>
					</ul>
				</div>
			</div>
		</aside>
	</div>
	
	<div class="content">
		<header class="head">
			<div class="head_title_row">
				<!-- <div class="title_logo"></div> -->
				<div class="title_header"><h1>Website Redesign</h1>
					<div class="title_button button_threepoint">
						<div class="button_wrap button_wrap_threepoint">
							<a  href="#" class="dotts">&#9679;&#9679;&#9679;
							</a>
						</div>
					</div>
				</div>
				<div class="logo_user oser_one">
					<div class="logo_user_wrap">
					</div> 
				</div>
				<div class="logo_user user_two">
					<div class="logo_user_wrap">
					</div> 
				</div>
				<div class="logo_user user_three">
					<div class="logo_user_wrap">
					</div>
				</div>
				<div class="title_button title_button_share">
					<div class="button_wrap button_wrap_share">
						<span class="button_share">Share</span>
					</div>
				</div>
				<div class="title_button title_button_chat">
					<div class="button_wrap button_wrap_chat">
						<span class="button_text">
							<i class="fa fa-comments"></i>Chat</span>
						</div>
					</div>
					<div class="user_logo_one"></div>
					<div class="user_logo_two"></div>
					<div class="user_logo_three"></div>
					<div class="title_button share"></div>
					<div class="title_button chat"></div>
				</div>
				<div class="head-nav">
					<ul class="main-menu">
						<li class="main-menu_item"><a href="#">Tasks</a></li>
						<li class="main-menu_item"><a href="#">Kanban</a></li>
						<li class="main-menu_item"><a href="#">Activity</a></li>
						<li class="main-menu_item"><a href="#">Calendar</a></li>
						<li class="main-menu_item"><a href="#">Files</a></li>
					</ul>
				</div>
			</header>
			<main class="main">
				<div class="main-wrap">
					<div class="main_hader">
						<span class="main_hader_title">TODAY</span>
					</div>
					<div class="main_paragraph action_1">
						<p class="action_description_1">
							<span class="action_text">Darika samak mark as done Listing on Product Hunt so that we can reach as many potential users</span>
							<span class="action-time">8:40 PM</span>
						</p>
					</div>
					<div class="main_paragraph action_2">
						<p class="action_description_2">
							<span class="action_text">Emilee Simchenko commented on Account for teams and personal in bottom style</span>
							<span class="action-time">7:32 PM</span>
						</p>
						<div class="extra-description">
							<span class="extra-description_text">During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</span>
						</div>
					</div>
					<div class="main_paragraph action_3">
						<div class="action_description_3">
							<span class="action_text">Darika Samak uploaded 4 files on An option to search in current projects or in all projects</span>
							<span class="action-time">6:02 PM</span>
						</div>
						<div class="uploaded">
							<div class="uploaded_wrap" id="pics">
								<div class="uploaded_item uploaded_preview1"></div>
								<div class="uploaded_item uploaded_preview2"></div>
								<div class="uploaded_item uploaded_preview3"></div>
								<div class="uploaded_item uploaded_preview4"></div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
export default {
  name: 'page'
}
window.onload = init;
const confirmTask = "Are you sure you want to change the number of tasks?";


function init() {

	const notificationsNumber = document.getElementById("notifications_value");
	const numberOfComplitedTasks =  document.getElementById("complited-tasks-value");
	const complitedTasks = document.getElementById("complited");
	const numberOfOpenTasks =  document.getElementById("open-tasks-value");
	//const openTasks = document.getElementById("open-tasks");
	const picsContainer = document.getElementById("pics");
	const imgs = picsContainer.children;

	picsContainer.addEventListener("click", function(event) {
		const clicked = event.target;
		for (let i = 0; i < imgs.length; i++) {
			if (imgs[i] === clicked) {
				notificationsNumber.innerHTML = i + 1;
			}
		}
	});

	complitedTasks.addEventListener("click", () => {

		const numberOpen = parseInt(numberOfOpenTasks.innerHTML);
		const numberCompleted = parseInt(numberOfComplitedTasks.innerHTML);
		if ( numberOpen > 0) {
			let answer = confirm(confirmTask);
			if (answer) {
				numberOfOpenTasks.innerHTML = numberOpen - 1;
				numberOfComplitedTasks.innerHTML = numberCompleted + 1;
			}
		}
	});
	
}
</script>

<style>
/* 
@font-face {
  font-family:"Game of Thrones";
} */

#page{
	
	font-family: sans-serif;
	display: flex;
	flex-direction: row;
}
a {
	text-decoration: none;
}
.left_container {
	width: 270px;
}
.content {
	display: flex;
	flex-direction: column;
}
.column {
	font-family: Helvetica, sans-serif;
	height: 100vh;
	width: 100%;
}
.aside_header, .aside-menu {
	margin-left: 30.4px;
	margin-right: 20px;
}
.aside_header {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 84px;
}
.aside-menu_list {
	display: flex;
	flex-direction: column;
}
.aside-title {
	font-family: Helvetica, sans-serif;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.2em;
}
.aside-title_text {
	margin-left: 15%;
	font-size: 0.9em;
	color: white;
}
.aside-title::before {
	content: "";
	background-image:  url("../assets/Logo@3x.svg");
	display: inline-block;
	width: 21.6px;
	height: 18.9px;
	background-size: cover;
	position: absolute;
}
.button-search {
	content: "\f002";
	color: #808080;
	display: inline-block;
	font-family: "FontAwesome";
	width: 20px;
	height: 20px;
	background-size: cover;
}
.user_block {
	background-color: #202020;
	display: flex;
	padding-left: 30.4px;
	padding-right: 20px;
	height: 80px;
	align-items: center;
	color: white;
	flex: 1;
	justify-content: space-between;
}
.user_block_wrap {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 60px;
	height: 35px;
}
.user_block::before {
	content: "";
	background-image:  url("../assets/hb.jpg");
	display: inline-block;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	background-size: cover;
	position: absolute;
}

.user_block_name {
	font-weight: 200;
	font-size: 0.9em;
	display: block;
	margin-right: 10px;
}
.user_block_status {
	font-size: 0.8em;
	color: #9b9b9b;
	display: block;
}
.user-stats {
	padding-left: 30.4px;
	padding-right: 20px;
	margin-top: 20px;
	display: flex;
	color: white;
}
.value, .state {
	display: block;
}

.state {
	color:#9b9b9b;
	font-size: 0.8em;
}
.open-tasks,.completed-tasks {
	flex: 1;
}
.completed-tasks {
	cursor: pointer;
}
.aside-menu {
	font-size: 0.9em;
	color: white;
}
.aside-menu_list {
	list-style-type: none;
	padding-left: 0;
}
.aside-menu_title {
	color: #9b9b9b;
}
.aside-menu_items {
	min-height: 38.1px;
	display: flex;
	align-items: center;
}
.aside-menu_items>a {
	color:white;
	font-weight: 200;
}
.notifications_number {
	margin-bottom: 3px;
	margin-left: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #FFC200;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	color:#654f0c;
}
.content {
	display: flex;
	flex: 1;
}
.head {
	height: 136px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: stretch;
	width: 100%;
}
.head_title_row {
	display: flex;
	margin-top: 35px;
	margin-bottom: 20px;
	height: 70%;
	align-items: center;
}
.title_header {
	flex: 1;
	display: flex;
	margin-left: 30px;
}
.title_header::before {
	content: "";
	background-image:  url("../assets/Shapes@2x.png");
	width: 40px;
	height: 40px;
	background-color: orange;
	display: inline-block;
	background-size: cover;
	border-radius: 7px;
	margin-right: 8px;
	position: absolute;
}
.title_header>h1 {
	margin: 0 0 0 60px;
}
.title_button {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 11px;
}
.button_wrap {
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	height: 30px;
	min-width: 30px;
	border-radius: 50%;
	background-color: #EAEAEA;
}
.button_threepoint {
	margin-right: 30%;
}
.button_wrap_share {
	border-radius: 15px;
	padding: 0 13px 0 13px;
}
.button_wrap_chat {
	border-radius: 15px;
	background-color: #FFF8DD;
	color: #FFC200;
	padding: 0 13px 0 13px;
}
.title_button_share {
	margin-left: 15px;
}
.logo_user {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 5px;
}
.logo_user_wrap {
	background-image: url("../assets/hb.jpg");
	background-size: cover;
	border-radius: 50%;
	display: inline-block;
	height: 30px;
	width: 30px;
}
.dotts {
	font-size: 0.7em;
	color:#9e9e9e;
	margin-bottom: 2px;
}
.fa-comments {
	position: absolute;
	display: inline-block;
	margin-left: -20px;
	color: #FFC200 ;
}
.button_wrap_chat>.button_text {
	display: inline-block;
	padding-left: 20px;
}
.left_container {
	display: flex;
	background-color: #0b0b0b;
}
.head-nav {
	align-items: flex-end;
	display: flex;
}
.main-menu {
	display: flex;
	padding: 0;
	margin-top: 0;
	list-style-type: none;
	margin-left: 30px;
	padding-left: 0;
}
.main-menu_item>a {
	display: inline-block;
	color:#9e9e9e;
	margin-right: 30px;
	font-family: verdana;
	font-weight: 500;
}
.main-menu_item>a:hover {
	color: black;
}
.main {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	background-color: #eeebe5;
}
.main-wrap {
	padding: 35px;
	border-radius: 9px;
	margin-top: 30px;
	background-color: white;
	width: 70%;
}
.main_hader_title {
	color: #9e9e9e;
}
.main_paragraph {
	display: flex;
	flex-direction: column;
}
.action_text, .action-time, .extra-description {
	display: inline-block;
}
.action_text {
	width: 63%;
	margin-right: 95px;
}
.action_description_1, .action_description_2, .action_description_3 {
	display: flex;
	justify-content: space-between;
	margin: 30px 0 20px 0;
}
.action_description_1::before {
	text-align: center;
	content: "\f00c";
	font-family: "FontAwesome";
	line-height: 40px;
	background-color: #CEF9C6;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-size: cover;
}
.action_description_2::before {
	text-align: center;
	content: "\f27a";
	font-family: "FontAwesome";
	line-height: 40px;
	background-color: #FFF8DD;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-size: cover;
}
.action_description_3::before {
	text-align: center;
	content: "\f019";
	font-family: "FontAwesome";
	line-height: 40px;
	background-color: #E3EFFF;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-size: cover;
}
.extra-description {
	margin-left: 10px;
	display: flex;
	width: 100%;
	justify-content: center;
}
.extra-description_text {
	padding: 30px;
	border-radius: 11px;
	background-color: #eeebe5;
	width: 72%;
}
.fa-comment-alt {
	width: 30px;
	height: 30px;
	color: red;
}
.action-time{
	font-size: 0.9em;
	color:#9e9e9e;
}
.uploaded {
	display: flex;
	justify-content: flex-start;
}
.uploaded_wrap {
	margin-left: 10%;
	display: flex;
} 
.uploaded_item {
	cursor: pointer;
	height: 100px;
	width: 100px;
	margin-right: 10px;
	border-radius: 10px;
	background-image: url("../assets/Tulips.jpg");
	background-size: cover;
}
</style>