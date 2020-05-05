# README


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false|
|password|string|null: false|
|mail_address|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :groups


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|messages|text||
|image|string||
|user_id|integer|foreign_key: true|

### Association
- has_many :messages
- belongs_to :user


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user