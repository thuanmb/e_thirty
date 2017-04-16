class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  private

  def pundit_user
    current_session
  end

  def current_user
    current_session
  end

  def current_session
    warden.user
  end

  def authenticate!
    warden.authenticate!
  end

  def warden
    request.env['warden']
  end
end
