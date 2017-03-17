var door = 1;
var gate=0;
			function pointerLR()
			{
				if (door==1)
				{
					document.getElementById("menu").style.left="-240px";				
					document.getElementById("pointerL").style.left="-240px";
					
					door = 0;
				}
				else
				{
					document.getElementById("menu").style.left="0px";
					document.getElementById("pointerL").style.left="0px";
					door = 1;
				}
			}
			
			function homepage()
			{
				window.location.href = "index.html";
			}
			
			function zoom()
			{

				if (gate==0)
				{

					document.getElementById("rockman").style.width="640px";
					document.getElementById("rockman").style.height="480px";
					
					gate=1;

				}
				else
				{
					document.getElementById("rockman").style.width="120px";
					document.getElementById("rockman").style.height="100px";
					
					gate=0;
					
				}
			}