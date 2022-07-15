const url='https://api.github.com/users'
let allUsers=[]

// first this would run
$.get(url,(data)=>{
	allUsers = data //here its 30 items
	createTitle()
	createCards()
	createRightSide()
})

function createTitle()
{
	let str=`total users ${allUsers.length}` //template string
	$(".total-title").text(str)		
}

function createCards()
{
	let a=allUsers.map(item=>createSingleCard(item))
	
	// har item pe jao or uska html return kro joki createSingleCard me hai
	// array ko jab map krte hai to hume milta hai item,index,array
	

	a=a.join("")//removed comma in each item of array
	$(".flex").html(a)
}
function createSingleCard(item)
{
	return `
				<div class="item">
					<h3>${item.login}</h3>
					<img src="${item.avatar_url}" alt="" width="80" height="80">
					<br>
					<button onclick="createRightSide('${item.login}')">view</button>
				</div>
	`
}
function createRightSide(login)
{
	// console.log(login)
	alert(login)
	if(login)
	{
		let url2=`https://api.github.com/users/${login}`
		$.get(url2,data=>{
			// console.log("after click",data)
			 let str= `
				<div class="preview-card">
					<img src="${data.avatar_url}" alt="" width="200" height="200">
					<h1 class="login">${data.login}</h1>
					<h2 class="type">${data.type}</h2>
					<a href="${data.html_url}">view profile</a>
				</div>
			`
			$(".right").html(str)
		})
	}
	else
	{

		let item=allUsers[0]
		 let str= `
			<div class="preview-card">
				<img src="${item.avatar_url}" alt="" width="200" height="200">
				<h1 class="login">${item.login}</h1>
				<h2 class="type">${item.type}</h2>
				<a href="${item.html_url}">view profile</a>
			</div>
		`
		$(".right").html(str)

	}


}




