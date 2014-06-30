angular.module('ChamCom').factory('MockData',function() {

	var MockData = {
		Categories: 
			[{
				title: 'Khuyến mại',
				id: 0
			},{
				title: 'Món nổi bật',
				id: 1
			},{
				title: 'Món điểm tâm',
				id: 2
			},{
				title: 'Món chính',
				id: 3
			},{
				title: 'Món tráng miệng',
				id: 4
			},{
				title: 'Đồ uống',
				id: 5
			}],
		Menu:
			[{
				name: "Mỳ xào ốc tỏi",
				desc: "Sợi mì chín vừa, không quá mềm. Ốc tỏi cắt miếng xào chung với mì và rau muống nên cũng đỡ ngán.",
				img: "img/item/1232433132.jpg",
				price: 40000,
				category: [0,1,2,3]
			},{
				name: "Ốc quế sa tế",
				desc: "Món này ngon nhưng hơi cay nha, cho nhiều sả nên dậy mùi lắm á. Ốc khế xào chín tới nên vẫn còn ngọt thịt luôn nha.",
				img: "img/item/xo42bmddqukxogvi.jpg",
				price: 30000,
				category: [0,5]
			},{
				name: "Carbonaga Spaghetti",
				desc: "#lozi Món này nhiều kem nên ăn hơi ngấy, giải pháp là cho thêm ít muối ^^!",
				img: "img/item/1404056698135.jpg",
				price: 95000,
				category: [3,4,5]
			},{
				name: "Bánh Plan Famitea",
				desc: "#lozi Món này ăn cũng ổn so với giá thành, vị caramen đậm vừa, nên thử!",
				img: "img/item/1404062801481.jpg",
				price: 12000,
				category: [0,1,4,5]
			},{
				name: "Gimbab chiên",
				desc: "#lozi Dũng cảm lắm mới dám gọi món này ăn vì mình k hợp khẩu vị mó n hàn cho lắm.Vừa mới cho vào miệng cắn thì miếng gimbab mềm mà giòn tan trong miệng. Cơm thì dẻo, vỏ ngoài thì giòn mà k có gì để chê hết trừ cái rau ở trong nhân k được ngon miệng lắm.Phục vụ thì nhanh và niềm nở phết Chấm 9/10 điểm :D",
				img: "img/item/132421312.jpg",
				price: 45000,
				category: [0,1,5]
			},{
				name: "Bánh ướt",
				desc: "Lạ từ tên đến vị, giá cả phải chăng, ai chưa thử thì nên thử ngay đi nhé ^^!",
				img: "img/item/1404106030253.jpg",
				price: 30000,
				category: [3,4,5]
			},{
				name: "Crepe Chocolate",
				desc: "#lozi Crepe hơi cháy cơ mà ăn giòn giòn ^^! Ở đây mình được chọn seasonal fruits với topping, mình đi cuối tháng 6, chỉ có xoài với táo thôi. Trong hình là chocolate và ở trong là xoài ^^!",
				img: "img/item/1404058255874.jpg",
				price: 55000,
				category: [2,3,5]
			},{
				name: "Ốc hương xào tỏi",
				desc: "Ốc hương xào tỏi - 30k Một dĩa đầy luôn mà có 30k hà. Ta nói lúc mang ra mà bất ngờ luôn. Tưởng order lộn, phải hỏi kỹ lại thì nhân viên nói dĩa này 30k, lúc đó mới yên tâm mà ăn.",
				img: "img/item/f90hrxux3bu766r0.jpg",
				price: 30000,
				category: [0,1,2]
			},{
				name: "Miến xào bò",
				desc: "Ngonnn mỗi tội hơi ít thịt bò =)) Mình hay ăn ở quán chị Nui nhé quán mà bên trong có cái shop với chỗ để xe ấy :x",
				img: "img/item/1403980132683.jpg",
				price: 25000,
				category: [1,2,3]
			},{
				name: "Bánh Plan Famitea",
				desc: "#lozi Món này ăn cũng ổn so với giá thành, vị caramen đậm vừa, nên thử!",
				img: "img/item/1404062801481.jpg",
				price: 12000,
				category: [3,5]
			},{
				name: "Gimbab chiên",
				desc: "#lozi Dũng cảm lắm mới dám gọi món này ăn vì mình k hợp khẩu vị mó n hàn cho lắm.Vừa mới cho vào miệng cắn thì miếng gimbab mềm mà giòn tan trong miệng. Cơm thì dẻo, vỏ ngoài thì giòn mà k có gì để chê hết trừ cái rau ở trong nhân k được ngon miệng lắm.Phục vụ thì nhanh và niềm nở phết Chấm 9/10 điểm :D",
				img: "img/item/132421312.jpg",
				price: 45000,
				category: [1,4,5]
			},{
				name: "Miến xào bò",
				desc: "Ngonnn mỗi tội hơi ít thịt bò =)) Mình hay ăn ở quán chị Nui nhé quán mà bên trong có cái shop với chỗ để xe ấy :x",
				img: "img/item/1403980132683.jpg",
				price: 25000,
				category: [0,2,5]
			},{
				name: "Crepe Chocolate",
				desc: "#lozi Crepe hơi cháy cơ mà ăn giòn giòn ^^! Ở đây mình được chọn seasonal fruits với topping, mình đi cuối tháng 6, chỉ có xoài với táo thôi. Trong hình là chocolate và ở trong là xoài ^^!",
				img: "img/item/1404058255874.jpg",
				price: 55000,
				category: [3,4,5]
			}]
	};

	return MockData;
});