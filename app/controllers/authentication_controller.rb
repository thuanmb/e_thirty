class AuthenticationController < ApplicationController
  include Pundit
  before_filter :authenticate!
  after_action :verify_authorized
end