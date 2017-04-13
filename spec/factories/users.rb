FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "test+#{n}@example.com" }
    password 'changeme'
    first_name ::Faker::Name.first_name
    last_name ::Faker::Name.last_name
  end
end
