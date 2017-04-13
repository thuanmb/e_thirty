class Api::V1::UsersController < Api::V1::BaseController
  skip_before_filter :authenticate!, only: [:me]

  def me
    skip_authorization

    data = if current_user
            UserRepresenter.prepare(UserDecorator.decorate(current_user))
           else
             false
           end
    api_respond_ok(data: data)
  end
end