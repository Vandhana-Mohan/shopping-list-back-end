\c groceries_dev;

 INSERT INTO groceries (name, category, image_url, description, price, quantity, unit, is_organic) VALUES
  ('Milk', 'Dairy', 'https://www.foodsafetynews.com/files/2021/06/illustration-milk-in-glass.jpg', 'Low-fat-Milk', 4.99, 1, 'Gallon', false),
  ('Apple', 'Fruits', 'https://www.foodsafetynews.com/files/2021/09/wax-apple-660x374.png', 'fresh',  2.99, 2, 'pound', false),
  ('Potatoes', 'Vegetables', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6TKHj0G_rMVbSRmTrhKhCEa22c2qy4lVzjCayANR2g&s', 'tuber-round-oval', 2.29, 10, 'pound', true),
  ('Bread Loaf', 'Bakery', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-Tq7ywHXRBUVW9lOBYw0XuYTj_WsOzlpTnc6ZKzQ5vTQAE7xA1Uk38B-DCWw3HQEVU1t9RK3j', '21 Whole Grains', 5.99, 1, 'oz', true),
  ('Beef Steak', 'Meat', 'https://assets.kansascitysteaks.com/dyn-images/pdp_hero/TBone_Prime_Raw_SU07-b3250c1962c455e6e20b6debcf6d6678.jpg', 'USDA Prime T_bone Steak', 7.99, 1, 'pound', false),
  ('Pepsi', 'Beverages', 'https://m.media-amazon.com/images/I/41b4770tmqL._PIbundle-24,TopRight,0,0_SX273SY500SH20_.jpg', 'Zero-Sugar', 27, 24, 'oz', false),
  ('Coke', '', '', '', 0.99, 1, '',true),
  ('Muffins', 'Bakery', 'https://fitfoodiefinds.com/wp-content/uploads/2019/02/muffins-3.jpg', '', 0.99, 1, '',true),
  ('Lays', 'Snacks', 'https://cdn.shopify.com/s/files/1/0413/1107/6505/products/05082032-2ace6c-1650x1650_1024x.jpg?v=1597662771', '', 0.99, 1, '',false),
  ('Mangoes', '', 'https://c8.alamy.com/comp/2A0XJFT/isolated-mango-two-yellow-mango-fruit-hanging-on-a-tree-branch-isolated-on-white-background-with-clipping-path-2A0XJFT.jpg', '', 36, 12, '',false),
  ('Spinach', 'Vegatables','https://cdn.britannica.com/30/82530-050-79911DD4/Spinach-leaves-vitamins-source-person.jpg','',0.99,1,'',true),
  ('Almond milk', 'Dairy','https://cdn.shopify.com/s/files/1/0415/3455/4270/products/003042.jpg?v=1605755110','',5.99,2,'Gallon',true),
  ('Cashew milk', 'Dairy','https://silk.com/wp-content/uploads/2019/02/silk-unsweet-cashewmilk-2.png','',5.99,2,'Gallon',true);




INSERT INTO reviews (groceries_id, reviewer, title, content, rating )
VALUES
 (1, 'Evan', 'My Favorite', 'This website crushes it when it comes to awesome explanations', 3),
(2, 'Evan', 'My Favorite', 'This website crushes it when it comes to inspiring me', 3),
(3, 'Evan', 'My Least Favorite', 'This website crushes it when it comes to destroying my patience', 5),
(5, 'Juliana', 'I Love Going Here', 'I finally got some good organic Vegetables', 5),
(6, 'David', 'Cool Site', 'But I got way into adding organic product everywhere', 1),
(2, 'Mr. Mingo', 'So Helpful', 'I got some awesome recommendations for good products', 3),
(4, 'Alison', 'A lifesaver!','Helped me get what i need', 4),
(4, 'Hannah', 'Insert Confetti Emoji Here', 'css looks good!', 4),
(3, 'Gabi', 'My Friend Hannah', 'Gets a discount if I leave a positive review, so here it is', 5);