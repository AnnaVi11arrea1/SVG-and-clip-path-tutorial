require "sinatra"
require "sinatra/reloader"
require "http"

get("/") do
    erb(:home)
end
