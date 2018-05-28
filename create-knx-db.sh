curl -X GET -G 'http://localhost:8080/v0/users' --data-urlencode 'method=put' \
--data-urlencode 'login=login1' --data-urlencode 'name=пользователь 1' \
--data-urlencode 'phone=телефон пользователя 1' --data-urlencode 'position=позиция пользователя 1' \
--data-urlencode 'comment=комментарий пользователя 1'

curl -X GET -G 'http://localhost:8080/v0/users' --data-urlencode 'method=put' \
--data-urlencode 'login=login2' --data-urlencode 'name=пользователь 2' \
--data-urlencode 'phone=телефон пользователя 2' --data-urlencode 'position=позиция пользователя 2' \
--data-urlencode 'comment=комментарий пользователя 2'

curl -X GET -G 'http://localhost:8080/v0/clients' --data-urlencode 'method=put' \
--data-urlencode 'name=клиент 1' --data-urlencode 'phone=телефон клиента 1' \
--data-urlencode 'comment=комментарий 1'

curl -X GET -G 'http://localhost:8080/v0/clients' --data-urlencode 'method=put' \
--data-urlencode 'name=клиент 2' --data-urlencode 'phone=телефон клиента 2' \
--data-urlencode 'comment=комментарий 2'

curl -X GET -G 'http://localhost:8080/v0/clients' --data-urlencode 'method=put' \
--data-urlencode 'name=клиент 3' --data-urlencode 'phone=телефон клиента 3' \
--data-urlencode 'comment=комментарий 3'

curl -X GET -G 'http://localhost:8080/v0/clients/1/projects' --data-urlencode 'method=put' \
--data-urlencode 'nr=001' --data-urlencode 'contract_date=2018-04-01T00:00:00Z' \
--data-urlencode 'install_date&2018-04-21T00:00:00Z' --data-urlencode 'address=адрес клиента 1' \
--data-urlencode 'comment=комментарий 1'

curl -X GET -G 'http://localhost:8080/v0/clients/2/projects' --data-urlencode 'method=put' \
--data-urlencode 'nr=002' --data-urlencode 'contract_date=2018-04-02T00:00:00Z' \
--data-urlencode 'install_date&2018-04-22T00:00:00Z' --data-urlencode 'address=адрес клиента 2' \
--data-urlencode 'comment=комментарий 2'

curl -X GET -G 'http://localhost:8080/v0/clients/3/projects' --data-urlencode 'method=put' \
--data-urlencode 'nr=003' --data-urlencode 'contract_date=2018-04-03T00:00:00Z' \
--data-urlencode 'install_date&2018-04-23T00:00:00Z' --data-urlencode 'address=адрес клиента 3' \
--data-urlencode 'comment=комментарий 3'


curl -X GET -G 'http://localhost:8080/v0/projects/1/regions' --data-urlencode 'method=put' \
--data-urlencode 'region_type=1' --data-urlencode 'param=0(4)' \
--data-urlencode 'param=15(0.55)'

curl -X GET -G 'http://localhost:8080/v0/projects/1/regions' --data-urlencode 'method=put' \
--data-urlencode 'region_type=1' --data-urlencode 'param=0(4)' \
--data-urlencode 'param=15(0.55)'

curl -X GET -G 'http://localhost:8080/v0/projects/1/regions' --data-urlencode 'method=put' \
--data-urlencode 'region_type=2' --data-urlencode 'param=0(4)' \
--data-urlencode 'param=15(0.55)'

curl -X GET -G 'http://localhost:8080/v0/projects/1/regions' --data-urlencode 'method=put' \
--data-urlencode 'region_type=3' --data-urlencode 'param=0(4)' \
--data-urlencode 'param=15(0.55)'

echo ""
#http://api.localhost:8080/v0/users?method=put&login=login1&name=пользователь 1&phone=телефон пользователя 1&position=позиция пользователя 1&comment=комментарий пользователя 1
#http://api.localhost:8080/v0/users?method=put&login=login2&name=пользователь 2&phone=телефон пользователя 2&position=позиция пользователя 2&comment=комментарий пользователя 2

#http://api.localhost:8080/v0/clients?method=put&name=клиент 1&phone=телефон клиента 1&comment&комментарий 1
#http://api.localhost:8080/v0/clients?method=put&name=клиент 2&phone=телефон клиента 2&comment&комментарий 2
#http://api.localhost:8080/v0/clients?method=put&name=клиент 3&phone=телефон клиента 3&comment&комментарий 3

#http://api.localhost:8080/v0/clients/1/projects?method=put&nr=001&contract_date=2018-04-01T00:00:00Z&install_date&2018-04-21T00:00:00Z&address=адрес клиента 1&comment=комментарий 1
#http://api.localhost:8080/v0/clients/2/projects?method=put&nr=002&contract_date=2018-04-02T00:00:00Z&install_date&2018-04-22T00:00:00Z&address=адрес клиента 2&comment=комментарий 2
#http://api.localhost:8080/v0/clients/3/projects?method=put&nr=003&contract_date=2018-04-03T00:00:00Z&install_date&2018-04-23T00:00:00Z&address=адрес клиента 3&comment=комментарий 3


# http://localhost:4200/projects/1/regions-of-type-1/1
# http://localhost:4200/projects/1/new-region-of-type-1

# https://github.com/ngrx/example-app/tree/master/src смотри папки внутри src
